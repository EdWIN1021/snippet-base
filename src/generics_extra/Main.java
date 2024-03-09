package generics_extra;

import java.util.ArrayList;
import java.util.List;

record Employee(String name) implements QueryItem{

    @Override
    public boolean matchFieldValue(String fieldName, String value) {
        return false;
    }
}

public class Main {
    public static void main(String[] args) {
        int studentCount = 10;

        List<Student> students = new ArrayList<>();
        for(int i = 0; i<studentCount; i++){
            students.add(new Student());
        }
        // printList(lpaStudents);
        printMoreList(students);

        List<LPAStudent> lpaStudents = new ArrayList<>();
        for(int i = 0; i<studentCount; i++){
            lpaStudents.add(new LPAStudent());
        }
        // printList(lpaStudents);
        printMoreList(lpaStudents);

        var queryList = new QueryList<>(lpaStudents);
        var matches = queryList.getMatches("Course", "Python");
        printMoreList(matches);

        var students2021 = QueryList.getMatches(students, "YearStarted", "2021");
        printMoreList(students2021);

//        QueryList<Employee> employeeList = new QueryList<>();
    }

    // extends, super,
    public static  void printMoreList(List<? extends Student> students){
        for(var student:students){
            System.out.println(student.getYearStarted() + ": " + student);
        }

        System.out.println();
    }

//    public static <T extends Student> void printList(List<T> students){
//        for(var student:students){
//            System.out.println(student.getYearStarted() + ": " + student);
//        }
//
//        System.out.println();
//    }
}
