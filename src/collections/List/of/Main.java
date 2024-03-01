package collections.List.of;

import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        String[] strs = { "a", "b", "c", "d", "e"};

        List<String> list = new ArrayList<>(List.of(strs));
        list.add("f");
        list.set(0,"r");

        System.out.println(list);
    }
}
