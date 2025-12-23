package com.backend.domain.post.post.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.backend.domain.post.post.service.PostService;

import lombok.RequiredArgsConstructor;
import com.backend.domain.post.post.entity.Post;

@RestController // @Controller + @ResponseBody
@RequestMapping("api/v1")
@RequiredArgsConstructor
public class ApiV1PostController {
  private final PostService postService;

  @GetMapping("/posts")
  public List<Post> getPosts() {
    return postService.findAll();
  }
}