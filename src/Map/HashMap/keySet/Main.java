package Map.HashMap.keySet;

import Map.HashMap.Student;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;

public class Main {
    public static void main(String[] args) {
        Map<Integer, Student> studnts = new HashMap<>();
        studnts.put(1, new Student("Zach"));
        studnts.put(2, new Student("Ann"));
        studnts.put(3, new Student("Tim"));

        Set<Integer> set = studnts.keySet();
        System.out.println(set);
    }
}
