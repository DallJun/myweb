/**
 * Created by Dall on 15/7/20.
 */
var MainScene = cc.Scene.extend({

    onEnter:function () {
        this._super();
        var layer = ccs.load("img/MainScene.json").node;
        this.addChild(layer, 5);

        var start = ccui.helper.seekWidgetByName(layer, "start");
        var again = ccui.helper.seekWidgetByName(layer, "again");
        again.setVisible(false);
        var but = ccui.helper.seekWidgetByName(layer, "button");
        //var rs = ccui.helper.seekWidgetByName(layer, "rs");
        //cc.log(rs);

        //var rs = new cc.TextFieldTTF("lkjlkjlkjl");
        //rs.setPosition(cc.winSize.w/2, cc.winSize.height*0.7);
        //rs.setFontSize(20);
        ////rs.setFontColor(cc.color(255,255,255,255));
        //layer.addChild(rs, 100);

        var start_time = 0;
        var end_time = 0;
        var anNum = 2;
        but.addTouchEventListener(function(sender, type){
            if(type == 2){

                if(anNum == 2){
                    start_time = new Date().getTime();
                    anNum--;
                    return;
                }else if(anNum == 1) {
                    end_time = new Date().getTime();
                    anNum--;
                    cc.log("两次点击的时间 = " + (end_time - start_time));
                    start_time = 0;
                    end_time = 0;
                    //rs.setStringValue("" + (end_time - start_time));

                }
                if(anNum == 0){
                    anNum = 2;
                }

            }
        }, but);


    }

});