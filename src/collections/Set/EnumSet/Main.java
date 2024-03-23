package collections.Set.EnumSet;

import java.util.ArrayList;
import java.util.EnumSet;
import java.util.List;
import java.util.Set;

public class Main {
    enum WeekDay {SUNDAY, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY}

    public static void main(String[] args) {
        List<WeekDay> annsWorkDays = new ArrayList<>(List.of(WeekDay.MONDAY, WeekDay.TUESDAY, WeekDay.THURSDAY, WeekDay.FRIDAY));

        var annsDaysSet = EnumSet.copyOf(annsWorkDays);
        annsDaysSet.forEach(System.out::println);

        System.out.println();

        var allDaysSet = EnumSet.allOf(WeekDay.class);
        allDaysSet.forEach(System.out::println);

        System.out.println();

        Set<WeekDay> newPersonDays = EnumSet.complementOf(annsDaysSet);
        newPersonDays.forEach(System.out::println);

        System.out.println();

        Set<WeekDay> anotherWay = EnumSet.copyOf(allDaysSet);
        anotherWay.removeAll(annsDaysSet);
        anotherWay.forEach(System.out::println);

        System.out.println();

        Set<WeekDay> businessDays = EnumSet.range(WeekDay.MONDAY, WeekDay.FRIDAY);
        businessDays.forEach(System.out::println);
    }
}
