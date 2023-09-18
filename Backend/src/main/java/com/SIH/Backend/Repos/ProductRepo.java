package com.SIH.Backend.Repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.SIH.Backend.models.Category;
import com.SIH.Backend.models.Products;
@Repository

public interface ProductRepo extends JpaRepository<Products,Integer>{
	 List<Products> findByCat_Id(int categoryId);
	

}
