package collections.Set.TreeSet.pollFirst;

import collections.Set.TreeSet.Student;

import java.util.*;

public class Main {
    public static void main(String[] args) {
        NavigableSet<Student> sortedStudents = new TreeSet<>(Comparator.comparing(Student::getName));

        List<Student> students = new ArrayList<>(List.of(
                new Student("CCC"), new Student("AAA"),new Student("BBB")));
        sortedStudents.addAll(students);

        // remove element from the set
        System.out.println(sortedStudents.pollFirst());
    }
}
