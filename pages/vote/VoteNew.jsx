import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useFieldArray, useForm } from 'react-hook-form';
import {FaCloudUploadAlt} from "react-icons/fa";
import {Radio, Button} from "@mantine/core";


const defaultValues = {
  user: "",
  projects: [
    {
      id: 1,
      vote: "0",
      group: 1,
      n: "营口港鲅鱼圈港区钢杂泊位改造一期工程（一公司）"
    },
    {
      id: 2,
      vote: "0",
      group: 1,
      n: "绿地凤栖澜玥（二公司）"
    },
    {
      id: 3,
      vote: "0",
      group: 1,
      n: "黄骅港煤炭港区3#、4#通用散杂货码头工程（一公司）"
    },
    {
      id: 4,
      vote: "0",
      group: 1,
      n: "青岛港董家口港区大唐码头二期工程水工建筑物及疏浚工程（二公司）"
    },
    {
      id: 5,
      vote: "0",
      group: 1,
      n: "中国石化天津液化气（LNG）项目扩建工程（二期）码头工程（一公司）"
    },
    {
      id: 6,
      vote: "0",
      group: 1,
      n: "S231张榆线张家口至南山窑段改造提升工程B合同段（一公司）"
    },
    {
      id: 7,
      vote: "0",
      group: 1,
      n: "天津港北港池海嘉汽车滚装码头工程（码头工程）（一公司）"
    },
    {
      id: 8,
      vote: "0",
      group: 1,
      n: "中新天津生态城北堤水闸及船闸建设工程（水闸）施工（河海公司）"
    },
    {
      id: 9,
      vote: "0",
      group: 1,
      n: "青岛港董家口港区原油码头二期工程（二公司）"
    },
    {
      id: 10,
      vote: "0",
      group: 1,
      n: "中交一航局哈尔滨市轨道交通3号线二期工程土建工程TJ-15标项目经理部（城交公司）"
    },
    {
      id: 1,
      vote: "0",
      group: 2,
      n: "新建商业服务业设施项目（湖北金控大厦）（二公司）"
    },
    {
      id: 2,
      vote: "0",
      group: 2,
      n: "深圳市洪湖水质净化厂一期工程（三公司）"
    },
    {
      id: 3,
      vote: "0",
      group: 2,
      n: "中山东路（新津河-莲凤路）道路桥梁及配套项目-中砂大桥（二公司）"
    },
    {
      id: 4,
      vote: "0",
      group: 2,
      n: "钦州港大榄坪港区大榄坪作业区9号10号泊位工程（五公司）"
    },
    {
      id: 5,
      vote: "0",
      group: 2,
      n: "中交一航局佛山城市轨道交通2号线一期工程土建4标项目经理部（城交公司）"
    },
    {
      id: 6,
      vote: "0",
      group: 2,
      n: "广西交通职业技术学院昆仑校区东区学生食堂和13#-18#学生公寓楼项目（四公司）"
    },
    {
      id: 7,
      vote: "0",
      group: 2,
      n: "防城港渔澫港区散货专业化中心堆场工程及防城港渔澫港区第四作业区401号泊位工程工艺设备总承包项目（安装公司）"
    },
    {
      id: 8,
      vote: "0",
      group: 2,
      n: "汉寿县第一中学新建工程（三公司）"
    },
    {
      id: 1,
      vote: "0",
      group: 3,
      n: "成都市简州新城凤凰山村生态环境整治工程（一公司）"
    },
    {
      id: 2,
      vote: "0",
      group: 3,
      n: "水富港及火车站与渝昆高速路（水麻段）联络线项目（一公司）"
    },
    {
      id: 3,
      vote: "0",
      group: 3,
      n: "中交尚城18号地块（二公司）"
    },
    {
      id: 4,
      vote: "0",
      group: 3,
      n: "新建玉溪至磨憨铁路站前工程YMZQ-19标段（三公司）"
    },
    {
      id: 5,
      vote: "0",
      group: 3,
      n: "莆田石城海上风电场项目风机基础施工工程（总承包分公司）"
    },
    {
      id: 6,
      vote: "0",
      group: 3,
      n: "莆田平海湾海上风电场F区项目风机基础施工工程（总承包分公司）"
    },
    {
      id: 7,
      vote: "0",
      group: 3,
      n: "嘉兴港独山港区A区3号泊位工程（三公司）"
    },
    {
      id: 8,
      vote: "0",
      group: 3,
      n: "海秀快速路（二期）工程（一公司）"
    },
    {
      id: 1,
      vote: "0",
      group: 4,
      n: "印尼万丹丰益工业园港项目（五公司）"
    },
    {
      id: 2,
      vote: "0",
      group: 4,
      n: "孟加拉马塔巴里超超临界燃煤电厂配属码头工程（五公司）"
    },
    {
      id: 3,
      vote: "0",
      group: 4,
      n: "柬埔寨西哈努克港2×350MW燃煤电站码头工程施工（五公司）"
    },
    {
      id: 4,
      vote: "0",
      group: 4,
      n: "巴新西高地省高地公路凯尔特格路口至芒特哈根机场路段四车道升级改造项目（一公司）"
    },
    {
      id: 5,
      vote: "0",
      group: 4,
      n: "柬埔寨3号公路改扩建工程项目B段（五公司）"
    },
    {
      id: 1,
      vote: "0",
      group: 5,
      n: "中交一航局北部湾预制场（五公司）"
    },
    {
      id: 2,
      vote: "0",
      group: 5,
      n: "天津地铁11号线一期工程10标项目经理部预制场（城交公司）"
    },
    {
      id: 3,
      vote: "0",
      group: 5,
      n: "恒力石化长兴岛北岸作业区207号~211号通用泊位工程、辽宁红沿河核电有限公司取水口优化项目施工总承包工程（三公司）"
    },
    {
      id: 4,
      vote: "0",
      group: 5,
      n: "岷江（龙溪口枢纽至宜宾合江门）航道整治一期工程/犍为预制场、蕨溪预制场（二公司）"
    },
    {
      id: 5,
      vote: "0",
      group: 5,
      n: "阿尔及利亚斯基克达油气港改扩建工程预制场（一公司）"
    },
    {
      id: 6,
      vote: "0",
      group: 5,
      n: "云南（曲靖）至广西（百色）高速公路罗平至八大河段项目土建四标预制场（一公司）"
    },
    {
      id: 7,
      vote: "0",
      group: 5,
      n: "长春经济圈环线二期项目预制场（局项目部）"
    },
    {
      id: 8,
      vote: "0",
      group: 5,
      n: "久马高速公路TJ6-2标段预制梁场（一公司）"
    },
    {
      id: 9,
      vote: "0",
      group: 5,
      n: "裕龙岛炼化一体化项目（一期）海水取排水及雨水排放PC总承包项目预制场大连长兴岛预制场（二公司）"
    },
    {
      id: 10,
      vote: "0",
      group: 5,
      n: "茂名港吉达港区防波堤一期工程预制场（三公司）"
    },
  ]
};

export default function VoteNew(){
  const VoteSchema = yup.object().shape({
    user: yup.string(),
    projects: yup.array().of(
      yup.object().shape({
        Id: yup.string(),
        vote: yup.string(),
        group: yup.string().required(),
        n: yup.string()
      })
    )
  });

  const {handleSubmit, control,register, formState: {errors}} = useForm(
    {
      resolver: yupResolver(VoteSchema),
      mode: "onChange",
      defaultValues: defaultValues,
    }

  );

  const {fields} = useFieldArray({
    control,
    name: "projects"
  })

  console.log("err",errors);

  async function onSubmit(data){
    console.log("submit")
    console.log("submitdata",data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <Button
          p={5}
          type={"submit"}
          leftIcon={<FaCloudUploadAlt/>}
        >
          提交
        </Button>

      {fields.map(({id, vote, group ,n}, index) => (
        <div key={index}>
          <Radio.Group
            name={n}
            label={n}
            {...register(`projects[${index}].vote`)}
          >
            <Radio value="1" label="同意" />
            <Radio value="2" label="不同意" />
            <Radio value="3" label="推荐精品工程" />
          </Radio.Group>
        </div>
      ))}
    </form>
  );
}