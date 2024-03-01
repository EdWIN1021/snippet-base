package collections.List.LinkedList.addLast;

import java.util.LinkedList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        String [] strs = {"a", "b", "c"};
        LinkedList<String> list = new LinkedList<>(List.of(strs));

        list.addLast("e");
        System.out.println(list);
    }
}
