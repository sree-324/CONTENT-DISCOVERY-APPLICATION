// src/main/java/com/example/newsapp/model/News.java
package com.example.newsapp.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class News {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String author;
    private String date;
    private String content;
    private String imageUrl;
    private boolean isLiked;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getAuthor() {
		return author;
	}
	public void setAuthor(String author) {
		this.author = author;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public String getImageUrl() {
		return imageUrl;
	}
	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}
	public boolean isLiked() {
		return isLiked;
	}
	public void setLiked(boolean isLiked) {
		this.isLiked = isLiked;
	}
	public News(Long id, String title, String author, String date, String content, String imageUrl, boolean isLiked) {
		super();
		this.id = id;
		this.title = title;
		this.author = author;
		this.date = date;
		this.content = content;
		this.imageUrl = imageUrl;
		this.isLiked = isLiked;
	}
	public News() {
		super();
		// TODO Auto-generated constructor stub
	}

   
}
