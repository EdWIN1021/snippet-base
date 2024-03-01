package collections.List.ArrayList.lastIndexOf;

import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {

        ArrayList<String> list = new ArrayList<>();
        list.add("b");
        list.add("a");
        list.add("c");
        list.add("b");

        System.out.println(list.lastIndexOf("b"));
    }
}
