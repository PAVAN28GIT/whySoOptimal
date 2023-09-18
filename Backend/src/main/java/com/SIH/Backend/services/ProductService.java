package com.SIH.Backend.services;

import java.util.List;
import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

import com.SIH.Backend.models.Products;
import org.springframework.stereotype.Service;

import com.SIH.Backend.Repos.ProductRepo;
import com.SIH.Backend.dto.ProductDto;
import com.SIH.Backend.models.Category;

@Service
public class ProductService {
	@Autowired
ProductRepo prodrepo;
	public void add(ProductDto proddto,Category cat) {
		Products product=new Products();
		product.setDescription(proddto.getDescription());
		product.setImgurl(proddto.getImgurl());
		product.setName(proddto.getName());
		product.setPrice(proddto.getPrice());
		product.setCat(cat);
		prodrepo.save(product);
		
	}
	
	
	public ProductDto getproddto(Products prod) {
		ProductDto proddto=new ProductDto();
		proddto.setDescription(prod.getDescription());
		proddto.setImgurl(prod.getImgurl());
		proddto.setName(prod.getName());
		proddto.setPrice(prod.getPrice());
		proddto.setCatid(prod.getCat().getId());
		proddto.setId(prod.getId());
		return proddto;
		
		
	}
	
	
	public List<ProductDto>getallproducts() {
List<Products> allprods=prodrepo.findAll();
List<ProductDto> proddto=new ArrayList<>();
		for(Products prod:allprods) {
			proddto.add(getproddto(prod));
		}
		return proddto;
	}


	public void update(ProductDto proddto, int productid) throws Exception {
		Optional<Products> optionalprod=prodrepo.findById(productid);
		if(!optionalprod.isPresent()) {
			throw new Exception("Product not present");
			
		}
		Products product= optionalprod.get();
		product.setDescription(proddto.getDescription());
		product.setImgurl(proddto.getImgurl());
		product.setName(proddto.getName());
		product.setPrice(proddto.getPrice());
		prodrepo.save(product);
		
	}
	 public List<Products> findByCategoryId(int categoryId) {
	        return prodrepo.findByCat_Id(categoryId);
	    }


	public void delete(int productId) throws Exception {
        Optional<Products> productOptional = prodrepo.findById(productId);

        if (productOptional.isPresent()) {
            Products product = productOptional.get();

           
            prodrepo.delete(product);
        } else {
            throw new Exception("Product not found with id: " + productId);
        }
	}}
