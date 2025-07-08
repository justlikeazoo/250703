from fastapi import FastAPI, Depends, HTTPException
from database import engine, Base, SessionLocal, get_db
from dummy_data import insert_dummy_data
import models
from models import User, Product, Post, Comment
from sqlalchemy.orm import Session
from fastapi.middleware.cors import CORSMiddleware

# ⬇️ auth, utils, user 라우터 import
from routers import user  # ➤ backend/routers/user.py 에 작성한 라우터
# (auth.py와 utils.py는 user.py 내부에서 import하기 때문에 여기선 import 안 해도 됨)

app = FastAPI()

# ✅ DB 테이블 생성
Base.metadata.create_all(bind=engine)

# ✅ 더미 데이터 삽입
db = SessionLocal()
insert_dummy_data(db)
db.close()

# ✅ CORS 설정
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # 프론트 URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ✅ API 라우터 등록
app.include_router(user.router)  # 회원가입, 로그인 등

# ✅ 테스트용 기본 엔드포인트
@app.get("/")
def root():
    return {"message": "FastAPI 백엔드 연결 완료!"}

# ✅ 데이터 조회 API
@app.get("/users")
def get_users(db: Session = Depends(get_db)):
    return db.query(User).all()

@app.get("/products")
def get_products(db: Session = Depends(get_db)):
    return db.query(Product).all()

@app.get("/products/{product_id}")
def get_product(product_id: int, db: Session = Depends(get_db)):
    product = db.query(Product).filter(Product.id == product_id).first()
    if not product:
        raise HTTPException(status_code=404, detail="상품을 찾을 수 없습니다.")
    return product

@app.get("/posts")
def get_posts(db: Session = Depends(get_db)):
    return db.query(Post).all()

@app.get("/comments")
def get_comments(db: Session = Depends(get_db)):
    return db.query(Comment).all()


