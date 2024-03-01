package stringbuilder.capacity;

public class Main {
    public static void main(String[] args) {
        StringBuilder sb = new StringBuilder(80);

        System.out.println(sb.capacity());
    }
}
