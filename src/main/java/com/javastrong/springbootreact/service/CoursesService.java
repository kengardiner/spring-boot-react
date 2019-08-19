package com.javastrong.springbootreact.service;

import com.javastrong.springbootreact.model.Course;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CoursesService {
    private static List<Course> courses = new ArrayList<>();
    private static long idCounter = 0;

    static {
        courses.add(new Course(++idCounter, "JavaStrong", "Learn Full stack with Spring Boot and Angular"));
        courses.add(new Course(++idCounter, "JavaStrong", "Learn Full stack with Spring Boot and React"));
        courses.add(new Course(++idCounter, "JavaStrong", "Master Microservices with Spring Boot and Spring Cloud"));
        courses.add(new Course(++idCounter, "JavaStrong",
                "Deploy Spring Boot Microservices to Cloud with Docker and Kubernetes"));
    }

    public List<Course> findAll() {
        return courses;
    }
}
