package com.SIH.Backend.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.SIH.Backend.Repos.CategoryRepo;
import com.SIH.Backend.common.ApiResponse;
import com.SIH.Backend.dto.ProductDto;
import com.SIH.Backend.models.Category;
import com.SIH.Backend.models.Products;
import com.SIH.Backend.services.ProductService;
import org.springframework.web.bind.annotation.DeleteMapping;


@RestController
// /Products
@RequestMapping("/products")
public class ProductController {
	@Autowired
	ProductService prodserv;
	@Autowired
	CategoryRepo catrepo;
	// /Products/add -- To add products
	@PostMapping("/add")
	public ResponseEntity<ApiResponse> addproduct(@RequestBody ProductDto proddto ){
		Optional<Category> opcat=catrepo.findById(proddto.getCatid());
		if(!opcat.isPresent()) {
			  return new ResponseEntity<>(new ApiResponse(false,"Category Does not exsist"),HttpStatus.NOT_FOUND );
		}
		prodserv.add(proddto,opcat.get());
		 return new ResponseEntity<>(new ApiResponse(true,"Product added Successfully"),HttpStatus.OK );
		
		
	}
	// /Products/ -- To See all products
	@GetMapping("/")
	public ResponseEntity<List<ProductDto>> getProducts(){
		List<ProductDto> prod= prodserv.getallproducts();
		return new ResponseEntity<>(prod,HttpStatus.OK);
	}
	@PostMapping("/update/{productId}")
	public ResponseEntity<ApiResponse> Updateproduct(@PathVariable("productId") int productid,@RequestBody ProductDto proddto ) throws Exception{
		Optional<Category> opcat=catrepo.findById(proddto.getCatid());
		if(!opcat.isPresent()) {
			  return new ResponseEntity<>(new ApiResponse(false,"Category Does not exsist"),HttpStatus.BAD_REQUEST);
		}
		prodserv.update(proddto,productid);
		 return new ResponseEntity<>(new ApiResponse(true,"Product updated Successfully"),HttpStatus.OK );
		
		
	}
	

	// /Products/delete/productid -- To Delete the product
	@DeleteMapping("/delete/{productId}")
	public ResponseEntity<ApiResponse> deleteProduct(@PathVariable("productId") int productId) {
	    try {
	        // Call your ProductService method to delete the product by productId
	        prodserv.delete(productId);
	        return new ResponseEntity<>(new ApiResponse(true, "Product deleted Successfully"), HttpStatus.OK);
	    } catch (Exception e) {
	        return new ResponseEntity<>(new ApiResponse(false, "Error deleting product: " + e.getMessage()), HttpStatus.INTERNAL_SERVER_ERROR);
	    }
	}


}
