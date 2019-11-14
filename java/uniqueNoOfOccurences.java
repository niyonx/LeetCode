import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;

public class uniqueNoOfOccurences {
    public static boolean findUniqueOccurrences(int[] arr) {
        Arrays.sort(arr);
        ArrayList<Integer> listCount = new ArrayList<Integer>();
        int count = 1;
        for (int i = 0; i < arr.length -1 ; i++){
            if (arr[i]==arr[i+1]){
                count++;
            }else {
                listCount.add(count);
                count = 1;
            }
        }
        listCount.add(count);
        Collections.sort(listCount);
        for (int i = 0; i < listCount.size()-1; i++){
            if (listCount.get(i).equals(listCount.get(i+1))){
                return false;
            }
        }
        return true;
    }

    public static void main(String[] args) {
        int[] arr1 = {1,2,2,1,1,3};
        int[] arr2 = {1,2};
        int[] arr3 = {-3,0,1,-3,1,1,1,-3,10,0};

        System.out.println(findUniqueOccurrences(arr1));
        System.out.println(findUniqueOccurrences(arr2));
        System.out.println(findUniqueOccurrences(arr3));
    }
}