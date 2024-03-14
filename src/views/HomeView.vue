<template>
    <div class="panel">

        <div class="logo"></div>
        <div class="slogan">提出问题，从研究论文中直接获取结论</div>
        <el-input class="input" v-model="question" placeholder="提出你的问题" size="normal" @change="queryQuestion">
            <template #append>
                <el-button style="margin-top: -14px;" class="mt--16" :icon="Search" @click="queryQuestion" />
            </template>
        </el-input>
        <div class="mt-4 text-l">
            试试这些问题：
            <el-tag class="mr-4" type="warning" v-for="(item, index) in questionSamples" :key="index"
                @click="onSampleClick(item)">
                {{ item }}
            </el-tag>
        </div>
        <div class="text-3xl m-6 mt-24">
            如何搜索？
        </div>
        <p class="text-l m-2">
            深思使用人工智能在专业研究论文中寻找关联知识，并做出总结归纳，直接呈现给您回答的答案。
        </p>
        <p class="text-l m-2">
            和传统的关键词检索方式不同，最好的搜索方式就是直接提出问题。
        </p>

        <div class="crow  mt-24">
            <el-card class="m-4 w-72" shadow="hover" :body-style="{ padding: '20px' }">
                <div slot="header" class="cardhead">
                    <img class="qicon" :src="RelationIcon" alt="">
                    <span>询问概念之间的关系</span>
                </div>
                <div v-for="(item, index) in samples1" :key="index">
                    <el-tag @click="onSampleClick(item)" class="cardquestion" type="info" size="normal" effect="plain">
                        {{ item }}
                    </el-tag>
                </div>
            </el-card>

            <el-card class="m-4  w-72" shadow="hover" :body-style="{ padding: '20px' }">
                <div slot="header" class="cardhead">
                    <img class="qicon" :src="YesnoIcon" alt="">
                    <span>问一个简单的是/否问题</span>
                </div>
                <div v-for="(item, index) in samples2" :key="index">
                    <el-tag @click="onSampleClick(item)" class="cardquestion" type="info" size="normal" effect="plain">
                        {{ item }}
                    </el-tag>
                </div>
            </el-card>
            <el-card class="m-4  w-72" shadow="hover" :body-style="{ padding: '20px' }">
                <div slot="header" class="cardhead">
                    <img class="qicon" :src="EffectsIcon" alt="">
                    <span>询问一个概念的影响</span>
                </div>
                <div v-for="(item, index) in samples3" :key="index">
                    <el-tag @click="onSampleClick(item)" class="cardquestion" type="info" size="normal" effect="plain">
                        {{ item }}
                    </el-tag>
                </div>
            </el-card>

        </div>

        <div class="text-3xl m-6 mt-24">
            任何研究主题的答案
        </div>
        <p class="text-l m-2">
            关注研究人员可能已经研究过的问题。请参阅下面的示例主题，范围从生物学到社会科学
        </p>

        <div class="crow  mt-24 w-90">
            <el-card class="m-4 w-72" shadow="hover" :body-style="{ padding: '20px' }"
                v-for="(item, index) in themequestion" :key="index">
                <div slot="header" class="cardhead">
                    <img class="qicon2" :src="item.icon" alt="">
                    <span>{{ item.theme }}</span>
                </div>
                <div v-for="(q, index) in item.q" :key="index">
                    <el-tag @click="onSampleClick(q)" class="mt-2" type="warning" size="normal" effect="plain">
                        {{ q }}
                    </el-tag>
                </div>
            </el-card>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
import EffectsIcon from '@/assets/effects.svg'
import RelationIcon from '@/assets/relationship.svg'
import YesnoIcon from '@/assets/yes_no.svg'
import MentalIcon from '@/assets/mental_health.svg'
import SocialIcon from '@/assets/social_policy.svg'
import EcoIcon from '@/assets/economics.svg'

const question = ref('')
const questionSamples = [
    '肌酸有助于增强肌肉吗？',
    '正念有什么好处？',
    '直接现金转移可以减少贫困吗？',
]
const samples1 = [
    '打屁股会影响孩子的成长吗？',
    '作为初创公司创始人，什么预示着成功？',
    '肌酸可以改善认知吗？'
]
const samples2 = [

    '补锌可以治疗抑郁症吗？',
    '早晨的阳光会改善情绪吗？',
    '主场球迷会影响裁判的偏见吗？'
]
const samples3 = [
    '感恩练习有什么效果？',
    '迷幻药对心理健康有哪些好处？',
    '毒品非刑罪化有何影响？'
]

const themequestion = [
    {
        theme: '社会政策',
        icon: SocialIcon,
        q: [
            '群体间接触会减少偏见吗？',
            '如何提高选民投票率',
            '能力分组对学业成绩的影响'
        ]
    },
    {
        theme: '经济学',
        icon: EcoIcon,
        q: [
            '提高最低工资会增加失业率吗？',
            '移民对经济的影响',
            '气候变化对GDP有何影响？']
    },
    {
        theme: '精神健康',
        icon: MentalIcon,
        q: [
            '人际关系能让人快乐吗？',
            '体育锻炼可以提高认知能力吗？',
            'CBT 可以治疗恐惧吗？',
        ]
    }
]
const queryQuestion = () => {
    console.log(question.value)
}
function onSampleClick(item: string) {
    question.value = item
    queryQuestion()
}
</script>
<style lang="css" scoped>
.panel {
    background-color: #252525;
    position: relative;
    height: 100vh;
}

.slogan {
    font-size: 32px;
    text-align: center;
    margin-top: 100px;
    margin-bottom: 40px;
}

.input {
    width: 800px;
    height: 60px;
    line-height: 60px;
    font-size: 32px;
}

.el-input__wrapper {
    border-radius: 30px 0px 0px 30px;
    padding-left: 30px;
}

.el-input-group__append {
    border-radius: 0px 30px 30px 0px;
}

.tryques {
    margin-top: 20px;
    font-size: 12px;
    text-align: center;
}


.crow {
    display: flex;
    justify-content: space-around;
}

.cardhead {
    display: flex;
    align-items: center;
    padding-bottom: 16px;
    border-bottom: 1px solid #555;
}

.cardquestion {
    margin-top: 16px;
    border: 1px solid #0B4891;
    color: #becfe4;
    cursor: pointer;
}

.qicon {
    width: 60px;
    height: 60px;
    margin-right: 20px;
    background-color: #0B4891;
    padding: 16px;
    border-radius: 8px;
}

.qicon2 {
    width: 60px;
    height: 60px;
    margin-right: 20px;
    background-color: #cbad80;
    /* e6a23c; */
    padding: 16px;
    border-radius: 8px;
}
</style>