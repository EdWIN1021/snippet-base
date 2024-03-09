package Comparator;


import java.util.Comparator;

public class StudentGPAComparator implements Comparator<Student> {
    @Override
    public int compare(Student o1, Student o2) {
        return (o1.gpa).compareTo(o2.gpa);
    }
}
