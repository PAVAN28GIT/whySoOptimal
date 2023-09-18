package com.SIH.Backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.SIH.Backend.common.ApiResponse;
import com.SIH.Backend.models.Category;
import com.SIH.Backend.models.Products;
import com.SIH.Backend.services.CategoryService;
import com.SIH.Backend.services.ProductService;

@RestController
@RequestMapping("/category")
public class CategoryController {
	@Autowired
	CategoryService catservice;
	@Autowired
	ProductService prodservice;
	// /category/create -- To Create a new Catgeory
	@PostMapping("/create")
	public ResponseEntity<ApiResponse> CreateCategory(@RequestBody Category cat) {
		catservice.add(cat);
		return new ResponseEntity<>(new ApiResponse(true,"Created successfully"),HttpStatus.CREATED);
	}
	// /category/list -- To Display all  Catgeories
	@GetMapping("/list")
	public List<Category> ListCategory() {
		return catservice.show();
	}
	// /update/{categoryid} -- To Update a  Catgeory
	 @PostMapping("/update/{catid}")
	    public ResponseEntity<ApiResponse> updateCategory(@PathVariable("catid") int catid, @RequestBody Category cat) {
		 if(!catservice.findbyId(catid)) {
			 return new ResponseEntity<>(new ApiResponse(false,"category does not exist"),HttpStatus.NOT_FOUND ); 
		 }
	        catservice.editcat(catid, cat);
	        return new ResponseEntity<>(new ApiResponse(true,"Updated successfully"),HttpStatus.OK );
	    }
		// /catgory/{categoryid} -- To Get all products under certain Catgeory
	 @GetMapping("/{id}")
	    public ResponseEntity<List<Products>> getProductsInCategory(@PathVariable("id") int categoryId) {
	        boolean category = catservice.findbyId(categoryId);

	        if (!category) {
	            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	        }

	        List<Products> productsInCategory = prodservice.findByCategoryId(categoryId);

	        return new ResponseEntity<>(productsInCategory, HttpStatus.OK);
	    }

}

