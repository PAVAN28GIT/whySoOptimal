package com.SIH.Backend.models;

import jakarta.annotation.Generated.*;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="Products")
public class Products {
	public int getId() {
		return Id;
	}
	public void setId(int id) {
		Id = id;
	}
	public Category getCat() {
		return cat;
	}
	public void setCat(Category cat) {
		this.cat = cat;
	}
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int Id;
	@ManyToOne
	@JoinTable(name="catgegory_id")
	Category cat;
	private String name;
	private String imgurl;
	private double price;
	private String Description;
	
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getImgurl() {
		return imgurl;
	}
	public void setImgurl(String imgurl) {
		this.imgurl = imgurl;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public String getDescription() {
		return Description;
	}
	public void setDescription(String description) {
		Description = description;
	}
	

}
