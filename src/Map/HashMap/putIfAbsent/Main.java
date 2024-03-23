package Map.HashMap.putIfAbsent;

import Map.HashMap.Student;

import java.util.HashMap;
import java.util.Map;

public class Main {
    public static void main(String[] args) {
        Map<Integer, Student> map = new HashMap<>();
        map.putIfAbsent(1, new Student("Zach"));
        map.putIfAbsent(2, new Student("Ann"));
        map.putIfAbsent(2, new Student("Ann"));

        map.forEach((k ,v) -> System.out.println(k +" "+ v.getName()));
    }
}
