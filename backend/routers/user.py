from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from models import User
from utils import hash_password, verify_password
from auth import create_access_token
from database import get_db

router = APIRouter()

@router.post("/signup")
def signup(username: str, password: str, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.username == username).first()
    if user:
        raise HTTPException(status_code=400, detail="이미 존재하는 사용자입니다.")
    new_user = User(username=username, password=hash_password(password))
    db.add(new_user)
    db.commit()
    return {"message": "회원가입 성공"}

@router.post("/login")
def login(username: str, password: str, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.username == username).first()
    if not user or not verify_password(password, user.password):
        raise HTTPException(status_code=401, detail="아이디 또는 비밀번호가 잘못되었습니다.")
    token = create_access_token(data={"sub": str(user.id)})
    return {"access_token": token, "token_type": "bearer"}
