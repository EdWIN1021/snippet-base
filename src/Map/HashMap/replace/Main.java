package Map.HashMap.replace;

import Map.HashMap.Student;

import java.util.HashMap;
import java.util.Map;

public class Main {
    public static void main(String[] args) {
        Map<Integer, Student> map = new HashMap<>();
        map.put(1, new Student("Zach"));
        map.put(2, new Student("Ann"));
        map.put(3, new Student("Tim"));

        map.replace(2, new Student("Edwin"));

        map.forEach((k,v) -> System.out.println(k + ": " + v.getName()));
    }
}
