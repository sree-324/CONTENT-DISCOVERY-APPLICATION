package com.example.newsapp.controller;

import com.example.newsapp.model.News;
import com.example.newsapp.service.NewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins="*",allowedHeaders="*")

@RequestMapping("/api/news")
public class NewsController {

    private final NewsService newsService;

    @Autowired
    public NewsController(NewsService newsService) {
        this.newsService = newsService;
    }

    @GetMapping
    public List<News> getAllNews() {
        return newsService.getAllNews();
    }

    @GetMapping("/{id}")
    public News getNewsById(@PathVariable Long id) {
        return newsService.getNewsById(id);
    }

    @PostMapping("/post")
    public News addNews(@RequestBody News news) {
        return newsService.addNews(news);
    }

    // Add other CRUD operations and additional endpoints as needed
}
