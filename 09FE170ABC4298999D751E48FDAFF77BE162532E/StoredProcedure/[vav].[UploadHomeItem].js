﻿SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[vav].[UploadHomeItem]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [vav].[UploadHomeItem] (

	@ModuleId int,
	@TitleCn nvarchar(200)='''',
	@TitleEn nvarchar(200)='''',
	@SubmitDate datetime=''1900-01-01'',
	@Submitter nvarchar(100)='''',
	@Doc varbinary(MAX)=0x0,
	@DescrCn ntext='''',
	@DescrEn ntext='''',
	@UploadType nvarchar(50)='''',
	@UploadTypeValue nvarchar(200)='''',
	@TypeParam nvarchar(200)='''',
	@Isvalid bit=1,
	@FileType nvarchar(20)=''''
)
AS
BEGIN
	SET NOCOUNT ON;
	
	/*Update BondInfoCn*/
	BEGIN TRANSACTION;

	BEGIN TRY
	
		IF @UploadType = ''File''
		BEGIN
			INSERT INTO vav.HomeFile(FileType, FileData) VALUES(@FileType, @Doc)
			SET @UploadTypeValue = SCOPE_IDENTITY()
		END
		
		INSERT INTO vav.HomeItem(NameCn, NameEn, ModuleID, [Type], TypeValue, IsValid, TypeParam, Mtime)
		VALUES(@TitleCn, @TitleEn, @ModuleId, @UploadType, @UploadTypeValue, @Isvalid, @TypeParam, @SubmitDate)
	
	END TRY
	BEGIN CATCH
		SELECT 
			ERROR_NUMBER() AS ErrorNumber
			,ERROR_SEVERITY() AS ErrorSeverity
			,ERROR_STATE() AS ErrorState
			,ERROR_PROCEDURE() AS ErrorProcedure
			,ERROR_LINE() AS ErrorLine
			,ERROR_MESSAGE() AS ErrorMessage;
		
		--SET @Result = ''Error! '' + ERROR_MESSAGE()
			
		IF @@TRANCOUNT > 0
			ROLLBACK TRANSACTION;
    END CATCH;

	IF @@TRANCOUNT > 0
		COMMIT TRANSACTION;
END
' 
END
GO
