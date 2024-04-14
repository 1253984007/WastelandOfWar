//
//  PaimingViewController.m
//  WastelandOfWar-mobile
//
//  Created by adin on 2024/4/9.
//

#import "PaimingViewController.h"

@interface PaimingViewController ()

@property (retain, nonatomic) IBOutlet UILabel *lab2;
@property (retain, nonatomic) IBOutlet UILabel *lab3;
@property (retain, nonatomic) IBOutlet UILabel *lab1;
@property (retain, nonatomic) IBOutlet UILabel *lab4;
@property (retain, nonatomic) IBOutlet UILabel *lab5;

@end

@implementation PaimingViewController

@synthesize dataArray;


- (void)viewDidLoad {
    [super viewDidLoad];
    self.lab1.text=[NSString stringWithFormat:@"1:Level %@ ", [self getValueAtIndex:0 inArray:dataArray]];
    self.lab2.text=[NSString stringWithFormat:@"2:Level %@ ", [self getValueAtIndex:1 inArray:dataArray]];
    self.lab3.text=[NSString stringWithFormat:@"3:Level %@ ", [self getValueAtIndex:2 inArray:dataArray]];
    self.lab4.text=[NSString stringWithFormat:@"4:Level %@ ", [self getValueAtIndex:3 inArray:dataArray]];
    self.lab5.text=[NSString stringWithFormat:@"5:Level %@ ", [self getValueAtIndex:4 inArray:dataArray]];
    // Do any additional setup after loading the view from its nib.
}
- (NSString *)getValueAtIndex:(NSInteger)index inArray:(NSArray *)array {
    if (index < 0 || index >= [array count]) {
        return @"0";
    } else {
        return [NSString stringWithFormat:@"%@", array[index]];
    }
}
- (void) back{
}

/*
#pragma mark - Navigation

// In a storyboard-based application, you will often want to do a little preparation before navigation
- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
    // Get the new view controller using [segue destinationViewController].
    // Pass the selected object to the new view controller.
}
*/

- (void)dealloc {
    [_lab2 release];
    [_lab3 release];
    [_lab1 release];
    [_lab4 release];
    [_lab5 release];
    [super dealloc];
}
- (IBAction)back1:(id)sender {
    [self dismissViewControllerAnimated:YES completion:nil];
}
@end
