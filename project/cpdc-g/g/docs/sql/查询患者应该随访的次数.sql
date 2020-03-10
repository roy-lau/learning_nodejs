-- 查询患者应随访的次数
SELECT
	a.PATIENT_NO,
	a.SD_ITEM_VALUE AS '手术日期',
	b.SD_ITEM_VALUE AS '死亡日期',
	ISNULL(
		CONVERT ( VARCHAR ( 10 ), b.SD_ITEM_VALUE, 120 ), 
		CONVERT ( VARCHAR ( 10 ), GETDATE(), 120 ) ) AS '截止随访时间'
-- 	DATEDIFF(
-- 		mm,
-- 		CONVERT ( VARCHAR ( 10 ), a.SD_ITEM_VALUE, 120 ),
-- 		ISNULL(CONVERT ( VARCHAR ( 10 ), b.SD_ITEM_VALUE, 120 ), CONVERT ( VARCHAR ( 10 ), GETDATE(), 120 ) )
-- 		) 
	FROM
		[dbo].[PAT_SD_ITEM_RESULT] AS a
		LEFT JOIN [dbo].[PAT_FOLLOW_UP_RESULT] AS b ON b.SD_ITEM_CODE = 'YXA_O_257' 
		AND b.SD_ITEM_VALUE != '' 
		AND a.PATIENT_NO= b.PATIENT_NO 
	WHERE
		a.SD_ITEM_CODE = 'YXA_O_161' 
		AND a.SD_ITEM_VALUE != '' 