package com.homepage.java.entity;

import java.text.SimpleDateFormat;
import java.util.GregorianCalendar;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Vote {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String season;
	private int votingTime;
	private String comment;
	
	public Vote() {
		this.votingTime = Integer.parseInt(new SimpleDateFormat("w").format(new java.util.Date()));
		this.comment = "Kein Kommentar abgegeben";
	}
	
	public Vote(String season) {
		super();
		this.season = season;
		this.votingTime = GregorianCalendar.WEEK_OF_YEAR;
		this.comment = "Kein Kommentar abgegeben";
	}
	
	public Vote(String season, String comment) {
		super();
		this.season = season;
		this.votingTime = GregorianCalendar.WEEK_OF_YEAR;
		this.comment = comment;
	}
	
	public String getSeason() {
		return season;
	}
	public void setSeason(String season) {
		this.season = season;
	}
	public int getVotingTime() {
		return votingTime;
	}
	public void setVotingTime(int votingTime) {
		this.votingTime = votingTime;
	}
	public String getComment() {
		return comment;
	}
	public void setComment(String comment) {
		this.comment = comment;
	}
	public int getId() {
		return id;
	}
}
