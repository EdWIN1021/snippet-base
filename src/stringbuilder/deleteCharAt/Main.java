package stringbuilder.deleteCharAt;

public class Main {
    public static void main(String[] args) {
        StringBuilder sb = new StringBuilder("Hello World");
        sb.deleteCharAt(0);

        System.out.println(sb);
    }
}
