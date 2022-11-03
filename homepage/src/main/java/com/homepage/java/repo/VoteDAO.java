package com.homepage.java.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.homepage.java.entity.Vote;

@Repository
public interface VoteDAO extends JpaRepository<Vote, Integer> {
}
