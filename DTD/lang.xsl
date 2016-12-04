<?xml version="1.0" encoding="UTF-8" ?>
<xsl:stylesheet version = "1.0"
     xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="html"/> 
<xsl:template match="/">
<DIV class="WIDTH : 50%; margin : 0 auto;"><xsl:apply-templates /></DIV>
</xsl:template>

<xsl:template match="CINEMA">
<DIV class=" text-align: center; "><xsl:apply-templates /></DIV>
</xsl:template>

<xsl:template match="FILM">
<DIV style="  border : 1px solid red; color: #007FFF;    background-color: #F0F8FF; font-size: 18pt; width: 200px;">
	 <DIV style="max-width: 200px;">
	  <xsl:apply-templates select="name"/>
	 <xsl:apply-templates select="type"/>
		 <xsl:apply-templates select="rating"/>
	 	 <xsl:apply-templates select="year"/>
	 <xsl:apply-templates select="description"/>
	 </DIV>
</DIV > 
</xsl:template>

<xsl:template match="name">
<h2 style="display : block;	padding : 2px;"> <xsl:value-of select="."/></h2>
</xsl:template>

<xsl:template match="type">
<p style="display : block;	padding : 2px; color: #6495ed;"><xsl:value-of select="."/></p>
</xsl:template>


<xsl:template match="rating">
<p style="display : block;	padding : 2px;color: #6495ed;">Рейтинг: <xsl:value-of select="."/></p>
</xsl:template>
<xsl:template match="year">
<p style="display : block;	padding : 2px;color: #6495ed;">Год: <xsl:value-of select="."/></p>
</xsl:template>
<xsl:template match="description">
<p style="display : block;	padding : 2px;color: #6495ed;">Описание: <xsl:value-of select="."/></p>
</xsl:template>


</xsl:stylesheet> 
