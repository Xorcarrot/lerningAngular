package com.homepage.java.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.homepage.java.entity.Vote;
import com.homepage.java.repo.VoteDAO;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class VoteService {
	
	@Autowired
	private VoteDAO voting;
	
	@PostMapping(value="/vote")
	public void addVote(@RequestBody Vote vote) {
		voting.save(vote);
	}
	
	@GetMapping("/vote")
	public List<Vote> fingVotes() {
		return voting.findAll();
	}

}
