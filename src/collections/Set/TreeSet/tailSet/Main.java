package collections.Set.TreeSet.tailSet;

import collections.Set.TreeSet.Student;

import java.util.*;

public class Main {
    public static void main(String[] args) {
        NavigableSet<Student> sortedStudents = new TreeSet<>(Comparator.comparing(Student::getName));

        List<Student> students = new ArrayList<>(List.of(
                new Student("CCC"), new Student("AAA"),new Student("BBB"), new Student("DDD"), new Student("EEE")));
        sortedStudents.addAll(students);

        System.out.println(sortedStudents.tailSet( new Student("CCC"), false));
    }
}
