from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base, Session

# MySQL 연결 URL
DB_URL = "mysql+pymysql://testuser:pass1234@localhost:3310/testdb"
# SQLAlchemy 엔진 생성 (echo=True는 SQL 로그 출력)
engine = create_engine(DB_URL, echo=True)

# 세션 팩토리 생성
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Base 클래스 생성 (모델 정의 시 상속)
Base = declarative_base()

# ✅ FastAPI에서 의존성 주입용으로 사용할 DB 세션 함수
def get_db():
    db: Session = SessionLocal()
    try:
        yield db
    finally:
        db.close()
