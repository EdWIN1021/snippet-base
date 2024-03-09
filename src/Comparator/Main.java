package Comparator;

import java.util.Arrays;
import java.util.Comparator;

public class Main {
    public static void main(String[] args) {
        Comparator<Student> gpaSorter = new StudentGPAComparator();
        Student[] students = {
                new Student("Zach"),
                new Student("Ann"),
                new Student("Tim")
        };
        Arrays.sort(students, gpaSorter.reversed());
        System.out.println(Arrays.toString(students));

    }
}
