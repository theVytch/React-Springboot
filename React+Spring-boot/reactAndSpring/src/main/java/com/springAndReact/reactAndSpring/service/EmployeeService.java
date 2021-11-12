package com.springAndReact.reactAndSpring.service;

import com.springAndReact.reactAndSpring.entities.Employee;
import com.springAndReact.reactAndSpring.exception.ResourceNotFoundException;
import com.springAndReact.reactAndSpring.repositories.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.Optional;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    public List<Employee> findAll() {
        return employeeRepository.findAll();
    }

    public Employee findById(Long id) {
        Optional<Employee> obj = employeeRepository.findById(id);
        return obj.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id " + id));
    }

    public Employee insert(Employee newEmployee) {
        return employeeRepository.save(newEmployee);
    }

    public Employee update(Long id, Employee obj) {
        try {
            Employee entity = employeeRepository.getById(id);
            updateData(entity, obj);
            return employeeRepository.save(entity);
        } catch (EntityNotFoundException e) {
            throw new ResourceNotFoundException("Employee can't be update " + id);
        }
    }

    public void delete(Long id) {
        try {
            employeeRepository.deleteById(id);
        } catch (EmptyResultDataAccessException e) {
            throw new ResourceNotFoundException("Employee can't be delete " + id);
        }
    }

    private void updateData(Employee entity, Employee obj) {
        entity.setName(obj.getName());
        entity.setEmail(obj.getEmail());
    }
}
