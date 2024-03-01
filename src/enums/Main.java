package enums;

import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        DayOfTheWeek weekDay = DayOfTheWeek.FRI;

        System.out.println(weekDay);
        System.out.println(weekDay.name());
        System.out.println(weekDay.ordinal());
        System.out.println(Arrays.toString(DayOfTheWeek.values()));
    }
}
