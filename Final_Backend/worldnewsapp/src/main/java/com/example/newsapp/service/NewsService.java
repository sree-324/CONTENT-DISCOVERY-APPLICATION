// src/main/java/com/example/newsapp/service/NewsService.java
package com.example.newsapp.service;

import com.example.newsapp.model.News;
import com.example.newsapp.repository.NewsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class NewsService {

    private final NewsRepository newsRepository;

    @Autowired
    public NewsService(NewsRepository newsRepository) {
        this.newsRepository = newsRepository;
    }

    public List<News> getAllNews() {
        return newsRepository.findAll();
    }

    public News getNewsById(Long id) {
        Optional<News> newsOptional = newsRepository.findById(id);
        return newsOptional.orElse(null);
    }

    public News addNews(News news) {
        // Assuming you don't want to allow users to set the ID manually.
        // If you do, you can remove the ID generation strategy from the News entity.
        news.setId(null);
        return newsRepository.save(news);
    }

    // Add other service methods as needed, like updateNews, deleteNews, etc.
}
