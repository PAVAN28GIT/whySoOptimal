package com.SIH.Backend.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.SIH.Backend.Repos.CategoryRepo;
import com.SIH.Backend.models.Category;
@Service
public class CategoryService {
@Autowired
CategoryRepo catrepo;
public void add(Category cat) {
	catrepo.save(cat);
}
public List<Category> show(){
	return catrepo.findAll();
	

}
public void editcat(int catid,Category updatecat) {
	Category cat=catrepo.getById(catid);
	cat.setCategoryname(updatecat.getCategoryname());
	cat.setId(updatecat.getId());
	cat.setImgurl(updatecat.getImgurl());
	catrepo.save(cat);
	
	
}
//public Category readCategory(String categoryName) {
//	return catrepo.findByCategoryName(categoryName);
//}

public Optional<Category> readCategory(Integer categoryId) {
	return catrepo.findById(categoryId);
}
public boolean findbyId(int catid) {

	return catrepo.findById(catid).isPresent();
}
}
