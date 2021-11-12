package com.springAndReact.reactAndSpring.repositories;

import com.springAndReact.reactAndSpring.entities.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
}
