package collections.Set.TreeSet.lower;

import collections.Set.TreeSet.Student;

import java.util.*;

public class Main {
    public static void main(String[] args) {
        NavigableSet<Student> sortedStudents = new TreeSet<>(Comparator.comparing(Student::getName));

        Student studentA = new Student("AAA");
        Student studentC = new Student("CCC");

        List<Student> students = new ArrayList<>(List.of(studentA, studentC));
        sortedStudents.addAll(students);

        // <
        System.out.println(sortedStudents.lower(new Student("BBB")));
    }
}
