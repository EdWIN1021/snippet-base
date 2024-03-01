package collections.List.ArrayList.remove;

import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> list = new ArrayList<>();

        list.add("a");
        list.add("b");
        list.add("c");
        list.remove(0);
        list.remove("b");

        System.out.println(list);
    }
}
