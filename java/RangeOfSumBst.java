public class RangeOfSumBst {
    public static class TreeNode {
        int val;
        TreeNode left;
        TreeNode right;

        TreeNode(int x) {
            val = x;
        }
    }

    public int rangeSumBST(TreeNode root, int L, int R) {
        if (root == null)
            return 0;
        if (root.val == L)
            return root.val + rangeSumBST(root.right, L, R);
        if (root.val == R)
            return root.val + rangeSumBST(root.left, L, R);
        if (root.val > L && root.val < R)
            return root.val + rangeSumBST(root.left, L, R) + rangeSumBST(root.right, L, R);
        else if (L > root.val)
            return rangeSumBST(root.right, L, R);
        else
            return rangeSumBST(root.left, L, R);
    }

    public static void main(String[] args) {
        RangeOfSumBst ros = new RangeOfSumBst();
        TreeNode tree = new TreeNode(10);
        tree.left = new TreeNode(5);
        tree.right = new TreeNode(15);
        tree.left.left = new TreeNode(3);
        tree.left.right = new TreeNode(7);
        tree.right.left = new TreeNode(13);
        tree.right.right = new TreeNode(18);
        tree.left.right.left = new TreeNode(6);

        System.out.println(ros.rangeSumBST(tree, 6, 10));
    }
}
