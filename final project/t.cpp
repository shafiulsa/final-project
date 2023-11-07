#include <bits/stdc++.h>
using namespace std;
int main()
{

     
     vector<int> arr = {1,2,3,4,5,6,7};
        int n=arr.size();
     int vec2[n];
   
      cout<<n<<endl;
      int k=3;
     for(int i=0;i<n;i++){
        if(i+k<n){
          vec2[i+k]=arr[i];
        }
        else{
          vec2[i+k-n]=arr[i];
        }
     }

     for(auto it:vec2){
          cout<<it<<" ";
     }

     return 0;
}
