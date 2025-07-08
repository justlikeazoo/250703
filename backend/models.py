from sqlalchemy import Column, Integer, String, Float, Text, ForeignKey
from sqlalchemy.orm import relationship
from database import Base


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String(100), unique=True, index=True, nullable=False)
    password = Column(String(200), nullable=False)

    name = Column(String(50))
    nickname = Column(String(50))
    age = Column(Integer)
    weight = Column(Float)
    height = Column(Float)
    profile_image = Column(String(200))
    bio = Column(Text)

    # 관계 설정
    posts = relationship("Post", backref="author", cascade="all, delete")
    comments = relationship("Comment", backref="commenter", cascade="all, delete")


class Product(Base):
    __tablename__ = "products"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), nullable=False)
    price = Column(Integer)
    shipping = Column(String(50))
    volume = Column(String(50))
    calories = Column(Integer)
    storage = Column(String(50))
    shipping_fee = Column(Integer)
    seller = Column(String(100))


class Post(Base):
    __tablename__ = "posts"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    title = Column(String(100), nullable=False)
    content = Column(Text, nullable=False)
    image = Column(String(200))  # 이미지 URL
    created_at = Column(String(50))
    likes = Column(Integer, default=0)

    comments = relationship("Comment", backref="post", cascade="all, delete")


class Comment(Base):
    __tablename__ = "comments"

    id = Column(Integer, primary_key=True, index=True)
    post_id = Column(Integer, ForeignKey("posts.id"))
    user_id = Column(Integer, ForeignKey("users.id"))
    content = Column(Text, nullable=False)
    created_at = Column(String(50))

