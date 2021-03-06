# 后记

## 新的布局系统

显然, 这个组件库的核心部分就在于`<ha-coordinater>`和`<ha-rectangle>`上了

`<ha-coordinater>`的作用在于将整个图纸切割等分, 并提供坐标系, 这里的坐标系, 说到底也就是利用了`grid`布局时所产生的分割线了, 也许是正好我的专业有幸接触了类似的东西, 灵感来自电路仿真等EDA软件的网格状编辑器和机器人控制中的坐标变换, 在不喜欢硬件的我身上产生了能不能在前端实现类似的东西, 所以就开始着手设计一个所谓的前端领域的"坐标系统", 说实话有点像是开了个研究课题进行实验什么的(然而实际上只是我在别人复习线代时偷懒不想复习安慰自己用的借口罢了)

本意是想要实现自动坐标变换的某个东东, 然而限于技术太菜, 所以有理想很丰满, 现实很残酷. 最终只搞出来了这么个东东, 唉, 还是有点不满意的.

## 新的UI设计理念

说实话, 一个人写这个组件库的时候, 大约有三分之一的时候都是在考虑UI设计的东西, 但是我不是专业的, 所以很费时间, 如果说是基于固定长度的以px为单位的话, 那倒还好, 重点是我要写的是自适应的, 因此就不能够固定长度, 很多时候基于px的解决方案都用不了, 所以只能一步一步的试验了, 在这个过程中深感自己的"技术无能". 所幸最终还是靠着毅力解决了大部分的问题.  

而在这个过程中, 脑海中也诞生了一些关于设计UI的想法, 于是就有了"物料 = 容器 + 填充物"的自适应解决方案, 填充物的宽度和高度均为`100%`, 因而他们的宽高, 就取决于包裹他们的"容器",而我将容器设计成了配合坐标器的`grid`布局, 因而只要给容器加上`grid-row-start`和`grid-row-end`, 再把容器放入设置了坐标的坐标器, 就有了相应的高度, 同理, 设置容器的`grid-column-start`和`grid-column-end`就有了宽度, 自此"应用 = 坐标系 + 物料 = 坐标系 + 容器 + 填充物"的设计理念应运而生, 就此, 整个UI组件库的设计原则诞生, 接下来只需要遵循此原则扩展组件库即可.

除此之外, 坐标器将网页可视区域等分, 这是不是有点像绘画打草稿时画的网格线?

那么, 为什么绘画打草稿要画网格线呢(当然部分大触你们不用画当我没说), 目的是为了确定比例吧(以我究极弱鸡级别的绘画水平也就只能吹到这了), 在仔细一想, 很多人绘画时难看不是因为线条或配色的关系, 关键是比例错了, 什么手长脚短之类的. 换句话说, 只要能准确地还原比例, 画出来的东西绝不会很难看.

再回来看UI, 设计时是不是只要比例正确, 并且在可视宽度变化时也保持正确的比例, 是不是就可以保持UI的美观呢?

而UI之间的比例, 正好由坐标器解决了.

假如将网页可视宽度分为50等分, 而每个UI所占用的等分是提前规定好的, 故UI之间的比例是确定的, 故而有这些提前设计好的比例关系保证了全局上的美观, 当可视宽度不变时, 有以上因果关系. 而当可视宽度变化时其依旧保持50等分值不变, 故有UI组件的所占等分值保持不变, 故也有UI之间的比例保持不变, 综上有全局的整体比例保持不变, 即整体的美观程度保持不变.

当然, 上面的这些推论, 好像正确, 又好像缺了什么东西, 对了, 其变化只在宽度上保持比例一致, 而当高度加入进来, 就不正确了, 比如一个本应高度比宽度小的UI, 在宽度变化后, 却造成了高度比宽度大的结果. 所以才有了坐标器不只有一个坐标系, 而是在不同宽度下拥有不同坐标系, 而容器也不仅有一个高度和宽度, 可以与其所在的坐标器所拥有的坐标系有相同数量的高度与宽度. 诚然, 这种解决方法只能"缓解"而不能"根除"这种高度和宽度在变化中的比例不协调的关系, 不过不能否认它所带来的收益, 所幸在实际使用时用户基本不会像我这样的开发者拉着devtool的左边不断变化宽度, 整体上还是有效解决了宽与高之间的比例关系的.

另一方面, 从设计师的角度上来说, 由于有了坐标器的存在, 因而有了新的设计算法:
  > 设计UI算法:
  > 1. 确定图纸的宽与高
  > 2. 确定图纸的等分值
  > 3. 确定每个UI的所占等分
  > 4. 确定UI之间的比例关系
  > 5. 绘制
  > 6. 如果需要适配新的图纸尺寸, 则返回1执行

一点关于设计UI的拙见, 还望指教.

## 其它

组件库的名称, 是因为由于想要一个colorful并且颜色可控的组件库, 而春天不正好是五彩缤纷的吗, 然而并不想取跟`Java`的框架`Spring`一样的名字, 正好自己又正在学日语, 那就用日语中单词意思为春天的`haru`吧(罗马音为ha ru, 用中文拼音读作ha lu)