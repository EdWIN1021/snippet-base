package collections.Collections.sort;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<Student> students = new ArrayList<>();

        students.add(new Student("Emma","Reynolds", 99));
        students.add(new Student("Ethan","Parker", 1));
        students.add(new Student("Olivia","Mitchell", 65));
        students.add(new Student("Noah","Anderson", 23));
        students.add(new Student("Sophia","Bennett", 89));

        // var studentIdComparator = Comparator.comparing((Student s) -> s.getId());
        var studentIdComparator = Comparator.comparing(Student::getId);
        Collections.sort(students, studentIdComparator);

        students.forEach(s -> System.out.println(s.getFirstName() + " " + s.getLastName() + " " + s.getId()));

    }
}
