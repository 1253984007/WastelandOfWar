//
//  RankingApi.m
//  WastelandOfWar-mobile
//
//  Created by feng ting on 2024/4/12.
//

#import "RankingApi.h"
#import "AppController.h"
#import "PaimingViewController.h"

@implementation RankingApi

+ (void)setData:(NSString *) data {
    NSLog(data);
    NSArray *array = [data componentsSeparatedByString:@","];
    AppController *deleget = UIApplication.sharedApplication.delegate;
    PaimingViewController *One = [[PaimingViewController alloc]init];
    One.dataArray=array;
    [deleget.viewController  presentViewController:One animated:YES completion:nil];
}
@end
