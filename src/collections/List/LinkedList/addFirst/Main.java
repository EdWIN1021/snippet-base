package collections.List.LinkedList.addFirst;

import java.util.LinkedList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        String [] strs = {"a", "b", "c"};
        LinkedList<String> list = new LinkedList<>(List.of(strs));

        list.addFirst("e");
        System.out.println(list);
    }
}
