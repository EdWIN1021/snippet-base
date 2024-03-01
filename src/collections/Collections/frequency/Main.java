package collections.Collections.frequency;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> list = new ArrayList<String>(List.of("a","b","a","d"));

        System.out.println(Collections.frequency(list, "a"));
    }
}
