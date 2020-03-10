SELECT
	dist.PATIENT_NO,
	dist.FU_TIMES,
	dist.SD_ITEM_CODE,
	code.ITEM_NAME,
	dist.SD_ITEM_VALUE,
	cv.CV_VALUE_TEXT
-- 	ret = ( CASE WHEN cv.CV_VALUE_TEXT=NULL THEN '' else cv.CV_VALUE_TEXT END)  -- cv.CV_VALUE_TEXT 和 dist.SD_ITEM_VALUE 类型不同，不能放在一列
FROM
	[dbo].[PAT_FOLLOW_UP_RESULT] AS dist
	LEFT JOIN [dbo].[FU_SD_ITEM_DICT] AS code ON dist.SD_ITEM_CODE= code.ITEM_CODE
	LEFT JOIN [dbo].[SD_ITEM_CV_DICT] AS cv ON cv.SD_CODE!= 'YXA'
	AND code.ITEM_CV_CODE= cv.CV_CODE 
	AND dist.SD_ITEM_VALUE= cv.CV_VALUE 
WHERE
	dist.PATIENT_NO = 'd134fe680add19d2'