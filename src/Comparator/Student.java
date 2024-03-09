package Comparator;

import org.jetbrains.annotations.NotNull;

import java.util.Random;

public class Student  {

    private static int LAST_ID = 1000;

    private static Random random = new Random();

    private int id;

    protected Double gpa;

    String name;

    public Student(String name) {
        this.name = name;
        id = LAST_ID++;
        gpa = random.nextDouble(1.0, 4.0);
    }

    public String getName() {
        return name;
    }

    @Override
    public String toString() {
        return "%d - %s (%.2f)".formatted(id, name, gpa);
    }



}
