package com.springAndReact.reactAndSpring.resources;

import com.springAndReact.reactAndSpring.entities.Employee;
import com.springAndReact.reactAndSpring.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@Controller
@RequestMapping("/employees")
public class EmployeeResource {

    @Autowired
    private EmployeeService employeeService;

    @GetMapping
    public ResponseEntity<List<Employee>> findAll(){
        List<Employee> list = employeeService.findAll();
        return ResponseEntity.ok().body(list);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Employee> findById(@PathVariable Long id){
        Employee obj = employeeService.findById(id);
        return ResponseEntity.ok().body(obj);
    }

    @PostMapping
    public ResponseEntity<Employee> insert(@RequestBody Employee newEmployee){
        newEmployee = employeeService.insert(newEmployee);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(newEmployee.getId()).toUri();
        return ResponseEntity.created(uri).body(newEmployee);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Employee> update(@PathVariable Long id, @RequestBody Employee newEmployee){
        newEmployee = employeeService.update(id, newEmployee);
        return ResponseEntity.ok().body(newEmployee);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id){
        employeeService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
